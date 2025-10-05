import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Zap, Target, Shield } from "lucide-react";
import StarField from "@/components/StarField";
import Planet3D from "@/components/Planet3D";
import MetricCard from "@/components/MetricCard";
import FileUpload from "@/components/FileUpload";
import { Button } from "@/components/ui/button";

const Upload = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState<File | null>(null);

  const handleFileSelect = (selectedFile: File) => {
    setFile(selectedFile);
  };

  const handleAnalyze = () => {
    if (file) {
      navigate("/results");
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <StarField />
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl font-bold glow-text leading-tight">
                Exoplanet
                <br />
                <span className="text-secondary">Classification AI</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Multimodal AI system analyzing NASA's datasets using CatBoost and XGBoost
                for accurate celestial body classification
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <MetricCard
                icon={Target}
                title="Accuracy"
                value="98.7%"
                description="Classification precision"
              />
              <MetricCard
                icon={Zap}
                title="Speed"
                value="<0.5s"
                description="Analysis time"
              />
              <MetricCard
                icon={Shield}
                title="Reliability"
                value="99.2%"
                description="Model confidence"
              />
            </div>

            <div className="w-full h-64 relative">
              <Planet3D type="earth" />
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-6">
            <FileUpload onFileSelect={handleFileSelect} />
            
            {file && (
              <Button 
                onClick={handleAnalyze}
                className="w-full bg-primary hover:bg-primary/90 text-lg py-6 glow-cosmic"
                size="lg"
              >
                Analyze Dataset
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
