import React, { useEffect, useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';



interface props{
  aiOutput:string;
}
const OutPutSection = ({ aiOutput }: props) => {
  const editorRef: any = useRef(null)

  useEffect(()=>{
    if (editorRef.current) {
      const editorInstance = editorRef.current.getInstance()
      editorInstance.setMarkdown(aiOutput)
    }
  }, [aiOutput])

  const handleCopy = () => {
    if (editorRef.current) {
      const editorInstance = editorRef.current.getInstance();
      const markdown = editorInstance.getMarkdown();
      navigator.clipboard.writeText(markdown);
    }
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
        <Editor
          initialValue="Your result will appear here!"
          ref={editorRef}
          height="350px"
          initialEditType="wysiwyg"
          useCommandShortcut={true}
          onChange={() => console.log(editorRef.current.getInstance().getMarkdown())}
        />
      </div>
    </div>
  )
}

export default OutPutSection