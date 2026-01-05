import { ProfileForm } from "@/components/profile/ProfileForm"

export const Profile = () => {
    return (
        <div className="space-y-6">
            {/* 
        The Header Title "Profile Settings" is handled by the Layou/AppHeader dynamic logic (to be added),
        or simpler: we can render a local header if the user prefers, but typically the Layout Header is global.
        Based on the image, "Profile Settings" is in the white header bar.
        I will assume AppHeader will be made dynamic.
      */}
            <ProfileForm />
        </div>
    )
}
