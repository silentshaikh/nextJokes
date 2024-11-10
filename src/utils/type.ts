//Context Children Type
export interface ContextChild {
  children: React.ReactNode;
}
//context type
export interface ContextType{
  jokeGenerte:() => void;
  jokes:string;
  load:boolean;
};

//type of joke api
export interface Joke{
  error: boolean;
  category: string;
  type: 'twopart' | 'single'; // Type could either be 'twopart' or 'single'
  setup?: string; // Optional as it might not exist for single type jokes
  delivery?: string; // Optional as it might not exist for single type jokes
  id: number;
  joke:string;
  lang: string;
  safe: boolean;
  flags: Flags;
}

interface Flags {
  nsfw: boolean;
  religious: boolean;
  political: boolean;
  racist: boolean;
  sexist: boolean;
  explicit: boolean;
}
