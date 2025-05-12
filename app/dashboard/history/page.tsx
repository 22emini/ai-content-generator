"use client"

import React, { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Copy } from "lucide-react"

// Fetch history from the API
async function fetchHistory() {
  const res = await fetch("/api/history")
  if (!res.ok) throw new Error("Failed to fetch history")
  const { data } = await res.json()
  // Add icon logic based on templateSlug
  return data.map((item: any) => {
    let icon = null
    if (item.template?.toLowerCase().includes("code")) {
      icon = { bg: "bg-blue-100", color: "text-blue-700", content: "</>" }
    } else if (item.template?.toLowerCase().includes("hash")) {
      icon = { bg: "bg-orange-100", color: "text-orange-500", content: "#" }
    } else if (item.template?.toLowerCase().includes("blog")) {
      icon = { bg: "bg-yellow-100", color: "text-yellow-600", content: "💡" }
    }
    return { ...item, icon }
  })
}

export default function HistoryPage() {
  const [history, setHistory] = useState<any[]>([])
  useEffect(() => {
    fetchHistory().then(setHistory)
  }, [])
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <Card className="w-full max-w-6xl mx-auto">
        <CardHeader className="pb-2">
          <CardTitle className="text-3xl font-bold">History</CardTitle>
          <CardDescription className="text-base text-muted-foreground">
            Search your previously generate AI content
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <div className="hidden sm:grid bg-gray-100 rounded-lg border px-4 py-3 grid-cols-12 gap-4 font-medium text-sm">
              <div className="col-span-2">TEMPLATE</div>
              <div className="col-span-5">AI RESP</div>
              <div className="col-span-2">DATE</div>
              <div className="col-span-1 text-center">WORDS</div>
              <div className="col-span-2 text-center">COPY</div>
            </div>
            <div className="divide-y">
              {history.map((item) => (
                <div
                  key={item.id}
                  className="px-2 py-4 grid grid-cols-1 sm:grid-cols-12 gap-y-2 sm:gap-4 items-center"
                >
                  {/* Template & Icon */}
                  <div className="flex items-center gap-2 col-span-2">
                    {item.icon ? (
                      <div className={`${item.icon.bg} p-1 rounded w-8 h-8 flex items-center justify-center ${item.icon.color}`}>
                        <span className="text-xs">{item.icon.content}</span>
                      </div>
                    ) : (
                      <div className="w-8 h-8" />
                    )}
                    <span className="text-sm font-medium">{item.template}</span>
                  </div>
                  {/* AI Response */}
                  <div className="sm:col-span-5">
                    <div className="text-sm break-words">{item.aiResp}</div>
                  </div>
                  {/* Date (hidden on xs) */}
                  <div className="sm:col-span-2 text-sm hidden sm:block">{item.date}</div>
                  {/* Words (hidden on xs) */}
                  <div className="sm:col-span-1 text-center text-sm hidden sm:block">{item.words}</div>
                  {/* Copy Button */}
                  <div className="sm:col-span-2 text-center mt-2 sm:mt-0">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="bg-purple-600 flex text-white items-center gap-2 text-sm px-3 py-2 w-full sm:w-auto justify-center"
                      onClick={() => navigator.clipboard.writeText(item.aiResp)}
                    >
                      <Copy size={18} /> Copy
                    </Button>
                  </div>
                  {/* Mobile-only: Date & Words stacked below */}
                  <div className="flex justify-between text-xs text-gray-500 sm:hidden col-span-1">
                    <span>{item.date}</span>
                    <span>{item.words} words</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
