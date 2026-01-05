import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Camera } from "lucide-react"

export function ProfileForm() {
    return (
        <div className="flex justify-center">
            <Card className="w-full max-w-2xl border-0 shadow-none bg-transparent md:bg-white md:dark:bg-card md:shadow-sm">
                <CardHeader className="flex flex-col items-center gap-4 pb-8">
                    <div className="relative">
                        <Avatar className="h-24 w-24 border-4 border-background shadow-md cursor-pointer hover:opacity-90 transition-opacity">
                            <AvatarImage src="/placeholder-user.jpg" alt="Jordan Smith" />
                            <AvatarFallback className="bg-orange-100 text-orange-600 text-2xl">JS</AvatarFallback>
                        </Avatar>
                        <div className="absolute bottom-0 right-0 rounded-full bg-green-500 p-1.5 text-white shadow-sm cursor-pointer hover:bg-green-600">
                            <Camera className="h-4 w-4" />
                        </div>
                    </div>
                    <div className="text-center">
                        <CardTitle className="text-xl font-bold">Jordan Smith</CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="display-name">Display Name</Label>
                        <Input id="display-name" defaultValue="Jordan Smith" />
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="first-name">First Name</Label>
                            <Input id="first-name" defaultValue="Jordan" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="last-name">Last Name</Label>
                            <Input id="last-name" defaultValue="Smith" />
                        </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="dob">Date of Birth</Label>
                            {/* Using simple date input for now, could be upgraded to Calendar component */}
                            <Input id="dob" type="text" defaultValue="Oct 24, 1995" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" type="email" defaultValue="jordan.smith@example.com" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <div className="relative">
                            <Input id="password" type="password" defaultValue="............" className="pr-16" />
                            <Button variant="ghost" size="sm" className="absolute right-0 top-0 h-full text-green-500 hover:text-green-600 hover:bg-transparent font-medium px-4">
                                Change
                            </Button>
                        </div>
                    </div>

                    <div className="flex justify-end pt-4">
                        <Button className="bg-green-500 hover:bg-green-600 text-white min-w-[140px]">
                            Update Profile
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
