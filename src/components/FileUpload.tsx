import { useState, useCallback } from "react";
import { Upload, FileText, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

interface FileUploadProps {
  onFileSelect: (file: File) => void;
}

const FileUpload = ({ onFileSelect }: FileUploadProps) => {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setSelectedFile(file);
      onFileSelect(file);
      toast.success("File uploaded successfully!");
    }
  }, [onFileSelect]);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      onFileSelect(file);
      toast.success("File uploaded successfully!");
    }
  }, [onFileSelect]);

  const removeFile = () => {
    setSelectedFile(null);
  };

  return (
    <Card 
      className={`bg-card/30 backdrop-blur-md border-2 transition-all duration-300 ${
        dragActive ? "border-primary glow-cosmic" : "border-primary/20"
      }`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <div className="p-8">
        {!selectedFile ? (
          <div className="flex flex-col items-center justify-center gap-4 min-h-[300px]">
            <div className="p-6 rounded-full bg-primary/10 border border-primary/20">
              <Upload className="w-12 h-12 text-primary" />
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-lg font-semibold">Upload Dataset</h3>
              <p className="text-sm text-muted-foreground">
                Drag and drop your exoplanet data file here
              </p>
            </div>
            <Button
              onClick={() => document.getElementById("fileInput")?.click()}
              className="bg-primary hover:bg-primary/90"
            >
              Select File
            </Button>
            <input
              id="fileInput"
              type="file"
              className="hidden"
              accept=".csv,.json"
              onChange={handleFileInput}
            />
          </div>
        ) : (
          <div className="flex items-center justify-between p-4 bg-primary/10 rounded-lg border border-primary/20">
            <div className="flex items-center gap-3">
              <FileText className="w-8 h-8 text-primary" />
              <div>
                <p className="font-medium">{selectedFile.name}</p>
                <p className="text-sm text-muted-foreground">
                  {(selectedFile.size / 1024).toFixed(2)} KB
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={removeFile}
              className="hover:bg-destructive/20"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};

export default FileUpload;
