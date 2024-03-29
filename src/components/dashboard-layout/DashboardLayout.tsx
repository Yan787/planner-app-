import { Sidebar } from 'lucide-react'
import type { PropsWithChildren } from 'react'

export default function DashboardLayout({
	children,
}: PropsWithChildren<unknown>) {
	return (
		<div className="grid min-h-screen 2xl:grid-cols-[1.1fr_6fr] grid-cols-[1.2fr_6fr]">
			<Sidebar />

			<main className="p-big-layout overflow-x-hidden max-h-screen relative">
				{/* todo: <Header /> */}
				{children}
			</main>
		</div>
	)
}
