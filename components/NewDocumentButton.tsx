"use client";
import { useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from './ui/button'
import { createDocument } from '../action/action'
function NewDocumentbtw() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const handleNewDocumentbtw = () => {
    startTransition(() => {
      createDocument().then((docId) =>
        router.push(`/doc/${docId}`)
      )
    });
  }
  return (
    <div>
      <Button onClick={handleNewDocumentbtw} disabled={isPending}>{isPending ? "Creating..." : "New Document"}</Button>
    </div>
  )
}

export default NewDocumentbtw