import React from 'react'
import NewDocumentbtw from './NewDocumentbtw'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon } from 'lucide-react'


function Sidebar() {
  const optionMenu = (
    <>
      <NewDocumentbtw />
    </>
  )
  return (
    <div className="p-2 md:p-5 bg-gray-200 relative">
      <div className="inline md:hidden">
        <Sheet>
          <SheetTrigger>
            <MenuIcon size={40} className="cursor-pointer p-2" />
          </SheetTrigger>
          <SheetContent side="left" className="w">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <div>{optionMenu}</div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden md:inline">
        {optionMenu}
      </div>

    </div>
  )
}

export default Sidebar