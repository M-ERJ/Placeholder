"use client";

import { createClient } from "@/utils/supabase/component";
import { useState, useEffect } from "react";
import { User } from "@supabase/supabase-js";
import useAuthModal from "@/hooks/useAuthModal";

const LoginTest = () => {
  const supabase = createClient();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true); // Added loading state
  const authModal = useAuthModal();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();
        setUser(user);
        console.log(user);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchData();
  }, [supabase]);

  const handleSignIn = () => {
    authModal.onOpen();
  };

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      setUser(null); // Clear user state on sign out
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Display a loading message while fetching user data
  }

  return (
    <>
      {user ? (
        <>
          <button onClick={handleSignOut}>Logout</button>
          <div>Welcome, {user.email}</div> {/* Display user email */}
        </>
      ) : (
        <>
          <button onClick={handleSignIn}>Login</button>
          <button onClick={handleSignIn}>Sign Up</button>
        </>
      )}
    </>
  );
};

export default LoginTest;
