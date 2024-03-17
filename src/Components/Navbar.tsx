import { BookOpenCheck } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
    return (
        <div className="navbar bg-slate-800">
            <div className="container">
                <div className="flex-1">
                    <Link href="/"><BookOpenCheck /></Link>
                </div>
                <div className="flex-none">
                    <Link href='/create' className="btn btn-ghost">
                        Create Post
                    </Link>
                </div>
            </div>
        </div>
    )
}
