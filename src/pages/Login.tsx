import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useNavigate } from "react-router-dom"
import { ThemeProvider } from "@/components/theme-provider"
import heroImageDark from "/root/.gemini/antigravity/brain/b030a323-b8f6-4732-b208-9a0376ccb34f/login_hero_navy_green_widgets_1767697805141.png"
import heroImageLight from "/root/.gemini/antigravity/brain/b030a323-b8f6-4732-b208-9a0376ccb34f/login_hero_flat_vector_analytics_1767697257598.png"

function LoginContent() {
    const navigate = useNavigate()

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        // For now, just navigate to home
        navigate("/")
    }

    return (
        <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 min-h-screen xl:min-h-[800px] bg-white dark:bg-[#0A192F] transition-colors duration-300">
            <div className="flex items-center justify-center py-12 relative overflow-hidden">
                {/* Background Decoration - Logic for Light/Dark Switch */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    {/* Dark Mode Decorations (Navy Fluid Waves) */}
                    <div className="hidden dark:block">
                        <div className="absolute -top-[10%] -left-[10%] w-[800px] h-[800px] bg-[#112240] rounded-[40%] blur-3xl opacity-50"></div>
                        <div className="absolute top-[40%] -right-[20%] w-[600px] h-[600px] bg-[#233554] rounded-[45%] blur-3xl opacity-40"></div>
                    </div>
                    {/* Light Mode Decorations (Teal/Blue Organic Waves) */}
                    <div className="block dark:hidden">
                        <div className="absolute -top-[20%] -left-[10%] w-[700px] h-[700px] bg-teal-50/50 rounded-[40%] blur-3xl opacity-60"></div>
                        <div className="absolute top-[40%] -right-[20%] w-[600px] h-[600px] bg-blue-50/50 rounded-[45%] blur-3xl opacity-60"></div>
                    </div>
                </div>

                <div className="mx-auto grid w-[350px] gap-6 relative z-10">
                    <div className="grid gap-2 text-center">
                        <h1 className="text-3xl font-bold tracking-tight text-slate-800 dark:text-white/90">Welcome Back</h1>
                        <p className="text-balance text-slate-500 dark:text-slate-400">
                            Enter your credentials to access your analytics
                        </p>
                    </div>
                    <form onSubmit={handleLogin} className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email" className="text-slate-600 dark:text-slate-300">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                required
                                className="border-slate-200 focus-visible:ring-teal-500 bg-white dark:border-slate-700 dark:bg-[#112240] dark:text-white dark:focus-visible:ring-emerald-500 dark:placeholder:text-slate-500 transition-colors"
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password" className="text-slate-600 dark:text-slate-300">Password</Label>
                            </div>
                            <Input
                                id="password"
                                type="password"
                                required
                                className="border-slate-200 focus-visible:ring-teal-500 bg-white dark:border-slate-700 dark:bg-[#112240] dark:text-white dark:focus-visible:ring-emerald-500 transition-colors"
                            />
                        </div>
                        <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white shadow-md dark:shadow-emerald-900/20 font-medium py-2 transition-all hover:translate-y-[-1px]">
                            Sign In
                        </Button>
                    </form>
                </div>
            </div>
            <div className="hidden bg-slate-50 dark:bg-white lg:block relative overflow-hidden transition-colors">
                {/* Background Overlays */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50/20 to-slate-200/20 dark:from-transparent dark:to-transparent"></div>
                <div className="absolute inset-0 hidden dark:block bg-[#0A192F]"></div>

                {/* Decorative Highlights */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white rounded-full blur-3xl opacity-40 dark:hidden"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#112240] rounded-full blur-3xl opacity-50 hidden dark:block"></div>

                {/* Light Mode Image */}
                <img
                    src={heroImageLight}
                    alt="Analytics Dashboard Light"
                    className="h-full w-full object-contain p-20 relative z-10 block dark:hidden"
                />
                {/* Dark Mode Image */}
                <img
                    src={heroImageDark}
                    alt="Connected Analytics Dark"
                    className="h-full w-full object-contain p-20 relative z-10 hidden dark:block"
                />
            </div>
        </div>
    )
}

export function Login() {
    return (
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
            <LoginContent />
        </ThemeProvider>
    )
}
