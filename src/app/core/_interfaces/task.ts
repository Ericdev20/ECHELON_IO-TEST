export interface Task {
  id: number;
  image: string;
  title: string;
  description: string;
  domain: string;
  nombre_heures: number;
  progression: number;
  participants: string[];
  essence_of_assessment: string[];
}
