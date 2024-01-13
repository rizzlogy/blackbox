export = Blackbox;

interface questionOptions {
  ask: string;
}

interface AIResponse {
  content: string;
  status: boolean;
  creator: string;
}

declare class Blackbox {
  constructor();
  
  question(options: questionOptions): Promise<AIResponse>;
}

declare namespace Blackbox {}
