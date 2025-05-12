import { UserButton } from '@clerk/nextjs'
import { Bell, Search } from 'lucide-react'
import React from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from '@/components/ui/textarea'


const Header = () => {
  const [name, setName] = React.useState('example');
  const [email, setEmail] = React.useState('peduarte@example.com');
  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      const res = await fetch('/api/send-message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage('Message sent successfully!');
      } else {
        setMessage(data.message || 'Failed to send message');
      }
    } catch (err) {
      setMessage('Failed to send message');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex  p-5 shadow-md  bg-white justify-end '>
        
       
           
         <Dialog>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <DialogTrigger asChild>
                <Button variant="outline"><Bell  className='text-purple-600  hover:rounded-full'/></Button>
              </DialogTrigger>
            </TooltipTrigger>
            <TooltipContent>
              <span>Send Mesage</span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Send Message</DialogTitle>
            <DialogDescription>
              contact the support team
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="name" className="text-right">
                  Name
                </label>
                <Input id="name" value={name} onChange={e => setName(e.target.value)} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="email" className="text-right">
                  Email
                </label>
                <Input id="email" value={email} onChange={e => setEmail(e.target.value)} className="col-span-3" />
              </div>
               <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="message" className="text-right">
                  Message
                </label>
                <Textarea id="message" value={message} onChange={e => setMessage(e.target.value)} className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" disabled={loading}>{loading ? 'Sending...' : 'Send Message'}</Button>
            </DialogFooter>
            {message && <div className="text-center mt-2 text-sm">{message}</div>}
          </form>
        </DialogContent>
      </Dialog>

    </div>
  )
}

export default Header
