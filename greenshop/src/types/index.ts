// This file exports types and interfaces used in the application for type safety.

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}

export interface NewSectionProps {
    title: string;
    content: string;
}

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    ariaLabel?: string;
    variant?: 'primary' | 'secondary';
}