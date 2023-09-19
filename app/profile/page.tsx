import authConfig from "@/configs/auth";
import { getServerSession } from "next-auth";

const Profile = async () => {
  const session = await getServerSession(authConfig);
  return <div>Welcome, {session?.user?.name}</div>;
};

export default Profile;
