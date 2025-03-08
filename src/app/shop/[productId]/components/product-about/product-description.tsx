interface ProductDescriptionProps {
  description: string;
  roomDescriptions: {
    living: string;
    dining: string;
    office: string;
  };
}

export default function ProductDescription({
  description,
  roomDescriptions,
}: ProductDescriptionProps) {
  return (
    <div className="space-y-8 text-muted-foreground">
      <div className="space-y-4">
        {description.split("\n").map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Living Room:
          </h3>
          <p>{roomDescriptions.living}</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Dining Room:
          </h3>
          <p>{roomDescriptions.dining}</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Office:
          </h3>
          <p>{roomDescriptions.office}</p>
        </div>
      </div>
    </div>
  );
}
