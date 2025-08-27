import { useState, useRef, useEffect } from 'react'
import { useLocalStorage } from '../utlis/useLocalStorage'

type Msg = { id: string; role: 'user' | 'support'; text: string; time: number }

export default function ChatBox(){
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useLocalStorage<Msg[]>('chat', [
    { id: 'm1', role: 'support', text: 'Hello! How can we help you today?', time: Date.now() }
  ])
  const endRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [messages, open])

  const send = () => {
    if(!input.trim()) return
    setMessages(prev => [...prev, { id: crypto.randomUUID(), role: 'user', text: input.trim(), time: Date.now() }, { id: crypto.randomUUID(), role: 'support', text: 'Thanks! Our team will respond shortly.', time: Date.now() }])
    setInput('')
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {open && (
        <div className="w-80 h-96 bg-white border rounded-2xl shadow-xl flex flex-col overflow-hidden">
          <div className="px-4 py-3 border-b flex items-center justify-between">
            <div className="font-semibold">Support</div>
            <button onClick={() => setOpen(false)} className="p-1 hover:bg-gray-100 rounded">✕</button>
          </div>
          <div className="flex-1 p-3 space-y-2 overflow-auto">
            {messages.map(m => (
              <div key={m.id} className={`max-w-[80%] p-2 rounded-2xl ${m.role==='user' ? 'ml-auto bg-gray-900 text-white' : 'bg-gray-100'}`}>
                <div className="text-[10px] opacity-60 mb-1">{new Date(m.time).toLocaleTimeString()}</div>
                <div className="text-sm leading-snug">{m.text}</div>
              </div>
            ))}
            <div ref={endRef}/>
          </div>
          <div className="p-2 border-t flex items-center gap-2">
            <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=> e.key==='Enter' && send()} placeholder="Type a message..." className="flex-1 border rounded-2xl px-3 py-2"/>
            <button onClick={send} className="px-3 py-2 bg-orange-500 text-white rounded-2xl">Send</button>
          </div>
        </div>
      )}
      <button onClick={() => setOpen(!open)} className="rounded-full w-12 h-12 bg-orange-500 text-white shadow-lg">💬</button>
    </div>
  )
}