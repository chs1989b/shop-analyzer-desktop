declare module "@google/genai" {
  export type GenerateContentResponse = {
    text?: string;
    [k: string]: any;
  };

  export class GoogleGenAI {
    constructor(opts?: { apiKey?: string } | Record<string, any>);
    models: {
      generateContent: (opts: Record<string, any>) => Promise<GenerateContentResponse>;
    };
  }

  export const Type: {
    OBJECT: string;
    STRING: string;
    NUMBER: string;
    ARRAY: string;
    [k: string]: any;
  };

  export default GoogleGenAI;
}
