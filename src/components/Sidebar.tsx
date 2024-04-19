import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar"
import { Theme } from "./Theme"
import Link from "next/link"
import Image from "next/image"
export function Sidebar() {
    return (
        <>
            <div className="fixed top-0 dark:bg-slate-950/80 shadow-md bg-white z-50 w-[100%] rounded-b-md round flex justify-between items-center py-4 px-5 " >
                <Link href={'/'} as={'/'}>
                    <Image src={'/assets/logo.svg'} alt="Loading" height={'30'} width={'30'} />
                </Link>
                <Sheet  >
                    <SheetTrigger asChild>
                        <svg width="25" height="21" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 4.5C2 4.22386 2.22386 4 2.5 4H12.5C12.7761 4 13 4.22386 13 4.5C13 4.77614 12.7761 5 12.5 5H2.5C2.22386 5 2 4.77614 2 4.5ZM7 7.5C7 7.22386 7.22386 7 7.5 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H7.5C7.22386 8 7 7.77614 7 7.5ZM4 10.5C4 10.2239 4.22386 10 4.5 10H12.5C12.7761 10 13 10.2239 13 10.5C13 10.7761 12.7761 11 12.5 11H4.5C4.22386 11 4 10.7761 4 10.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <div className="flex flex-col gap-4 mt-9">
                                <Menubar className="flex justify-center align-middle">
                                    <Link href={'/'} as={'/'}>

                                        <SheetClose>
                                            <MenubarMenu >
                                                <MenubarTrigger>Home</MenubarTrigger>
                                            </MenubarMenu>
                                        </SheetClose>
                                    </Link>
                                </Menubar>
                                <Menubar className="flex justify-center align-middle">
                                    <Link href={'/courses'} as={'/courses'}>
                                        <SheetClose>
                                            <MenubarMenu   >
                                                <MenubarTrigger  >Our Courses</MenubarTrigger>
                                            </MenubarMenu>
                                        </SheetClose>
                                    </Link>

                                </Menubar>
                                <Menubar className="flex  justify-center align-middle">
                                    <Link href={'/contactus'} as={'/contactus'}>
                                        <SheetClose>
                                            <MenubarMenu >
                                                <MenubarTrigger>Contact Us</MenubarTrigger>
                                            </MenubarMenu>
                                        </SheetClose>
                                    </Link>
                                </Menubar>

                            </div>
                        </SheetHeader>
                        <SheetFooter className="py-4 ml-[44%] ">
                            <SheetClose asChild>
                                <Theme />
                            </SheetClose>
                        </SheetFooter>
                    </SheetContent>
                </Sheet >
            </div>

        </>
    )
}
