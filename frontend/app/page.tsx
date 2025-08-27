import { useUser, useSession } from "@clerk/clerk-react";

export default function Dashboard() {
  const { user } = useUser();
  const { session } = useSession();

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>Welcome {user.fullName}</h2>
      <p>Email: {user.primaryEmailAddress?.emailAddress}</p>
      <p>Session ID: {session?.id}</p>
    </div>
  );
}
