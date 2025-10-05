import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface MetricCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  description: string;
}

const MetricCard = ({ icon: Icon, title, value, description }: MetricCardProps) => {
  return (
    <Card className="bg-card/50 backdrop-blur-sm border-primary/20 p-4 hover:border-primary/40 transition-all duration-300 glow-cosmic">
      <div className="flex flex-col items-center text-center gap-2">
        <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        <p className="text-2xl font-bold text-primary glow-text">{value}</p>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
    </Card>
  );
};

export default MetricCard;
