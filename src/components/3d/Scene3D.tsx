interface Scene3DProps {
  className?: string;
}

// Temporary fallback without Three.js to isolate the error
const Scene3D = ({ className }: Scene3DProps) => {
  return (
    <div className={`${className} relative bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 rounded-2xl overflow-hidden`}>
      {/* Animated background particles using CSS */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      
      {/* Content overlay */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full animate-pulse-glow flex items-center justify-center">
            <div className="w-8 h-8 bg-background rounded-full animate-molecular" />
          </div>
          <p className="text-sm text-muted-foreground">Molecular Research in Progress</p>
        </div>
      </div>
    </div>
  );
};

export default Scene3D;