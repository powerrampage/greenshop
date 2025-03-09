"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import { Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface ProfileUploadProps {
  currentImage: string | null
  onImageChange: (image: string | null) => void
}

export function ProfileUpload({ currentImage, onImageChange }: ProfileUploadProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(currentImage)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Check file type
    if (!file.type.startsWith("image/")) {
      alert("Please select an image file")
      return
    }

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert("File size should be less than 5MB")
      return
    }

    const reader = new FileReader()
    reader.onload = () => {
      const result = reader.result as string
      setPreviewUrl(result)
      onImageChange(result)
    }
    reader.readAsDataURL(file)
  }

  const handleRemoveImage = () => {
    setPreviewUrl(null)
    onImageChange(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <div className="flex items-center gap-4">
      <Avatar className="h-16 w-16">
        <AvatarImage src={previewUrl || ""} alt="Profile" />
        <AvatarFallback>
          {previewUrl ? (
            <Image
              src={previewUrl || "/placeholder.svg"}
              alt="Profile"
              width={64}
              height={64}
              className="object-cover"
            />
          ) : (
            <Camera className="h-8 w-8 text-muted-foreground" />
          )}
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col sm:flex-row gap-2">
        <Button type="button" variant="outline" size="sm" onClick={() => fileInputRef.current?.click()}>
          Change
        </Button>
        {previewUrl && (
          <Button type="button" variant="outline" size="sm" onClick={handleRemoveImage}>
            Remove
          </Button>
        )}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="hidden"
          aria-label="Upload profile picture"
        />
      </div>
    </div>
  )
}

