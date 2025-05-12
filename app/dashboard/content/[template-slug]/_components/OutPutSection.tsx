import React from 'react'
import dynamic from 'next/dynamic';
const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false });
const MarkdownPreview = dynamic(() => import('@uiw/react-markdown-preview'), { ssr: false });
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';



interface props{
  aiOutput:string;
}
const OutPutSection = ({ aiOutput }: props) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(aiOutput);
  };
   return (
    <div className="bg-white rounded-lg shadow-lg border w-full max-w-4xl mx-auto my-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 sm:p-5 gap-3 sm:gap-0">
        <h2 className="text-lg font-semibold">Your Result</h2>
        <Button 
          className="bg-purple-600 flex items-center gap-2 text-sm px-3 py-2"
          onClick={handleCopy}
        >
          <Copy size={18} /> Copy
        </Button>
      </div>
      <div className="px-2 pb-4 sm:px-5">
        <MDEditor
          value={aiOutput}
          height={350}
          preview="edit"
          onChange={() => {}}
        />
      </div>
    </div>
  )
}

export default OutPutSection