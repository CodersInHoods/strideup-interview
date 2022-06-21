export interface Park {
  id: string;
  name: string;
  images: Record<string, string>[];
}

export interface ParksListProps {
  parksListData: Park[];
}
