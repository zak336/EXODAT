import { useState } from "react";
import { ArrowLeft, Globe, Gauge, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import StarField from "@/components/StarField";
import Planet3D from "@/components/Planet3D";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type PlanetType = "gas" | "earth" | "ice";

const Results = () => {
  const navigate = useNavigate();
  const [planetType] = useState<PlanetType>("gas");

  const planetTypes = {
    gas: { name: "Gaseous Giant", description: "Large planet composed mainly of hydrogen and helium" },
    earth: { name: "Rocky Terrestrial", description: "Earth-like planet with solid surface composition" },
    ice: { name: "Ice Giant", description: "Planet primarily composed of heavier volatile substances" },
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <StarField />
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        <Button
          onClick={() => navigate("/")}
          variant="ghost"
          className="mb-8 hover:bg-primary/10"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Upload
        </Button>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Section - 3D Planet */}
          <div className="space-y-6">
            <div className="w-full h-96 relative rounded-2xl overflow-hidden border border-primary/20 bg-card/30 backdrop-blur-sm glow-cosmic">
              <Planet3D type={planetType} />
            </div>
            
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-primary glow-text">
                    {planetTypes[planetType].name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {planetTypes[planetType].description}
                  </p>
                </div>
                <Badge className="bg-primary/20 text-primary border-primary/40">
                  Confirmed
                </Badge>
              </div>
            </Card>
          </div>

          {/* Right Section - Results */}
          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 p-6 glow-cosmic">
              <h2 className="text-3xl font-bold mb-6 glow-text">
                Classification Results
              </h2>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                    <p className="text-sm text-muted-foreground mb-1">Planet Type</p>
                    <p className="text-lg font-semibold text-primary">Gaseous Giant</p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-secondary/10 border border-secondary/20">
                    <p className="text-sm text-muted-foreground mb-1">Classification</p>
                    <p className="text-lg font-semibold text-secondary">Exoplanet</p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                    <p className="text-sm text-muted-foreground mb-1">Confidence</p>
                    <p className="text-lg font-semibold text-primary">97.8%</p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                    <p className="text-sm text-muted-foreground mb-1">Status</p>
                    <p className="text-lg font-semibold text-green-400">True Positive</p>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-card border border-primary/20">
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-primary mt-1" />
                    <div className="flex-1">
                      <p className="text-sm font-medium mb-1">Mass Classification</p>
                      <p className="text-xs text-muted-foreground">
                        Jupiter-class exoplanet with estimated mass of 1.2 MJ
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-card border border-primary/20">
                  <div className="flex items-start gap-3">
                    <Gauge className="w-5 h-5 text-primary mt-1" />
                    <div className="flex-1">
                      <p className="text-sm font-medium mb-1">Orbital Properties</p>
                      <p className="text-xs text-muted-foreground">
                        Orbital period: 4.2 Earth days, Semi-major axis: 0.05 AU
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-card border border-primary/20">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-primary mt-1" />
                    <div className="flex-1">
                      <p className="text-sm font-medium mb-1">Detection Method</p>
                      <p className="text-xs text-muted-foreground">
                        Transit photometry via TESS with SNR of 24.3
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20 p-6 text-center">
                <p className="text-sm text-muted-foreground mb-2">Distance from Earth</p>
                <p className="text-3xl font-bold text-primary glow-text">3.2 ly</p>
                <p className="text-xs text-muted-foreground mt-1">Light years</p>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur-sm border-secondary/20 p-6 text-center">
                <p className="text-sm text-muted-foreground mb-2">Star Temperature</p>
                <p className="text-3xl font-bold text-secondary glow-text">5,800 K</p>
                <p className="text-xs text-muted-foreground mt-1">Kelvin</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
