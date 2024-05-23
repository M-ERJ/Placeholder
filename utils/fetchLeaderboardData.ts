import { createClient } from "@/utils/supabase/component";

const supabase = createClient();

// Define the Leader type directly in this file
export interface Leader {
  user_id: string;
  name: string;
  avatar_url: string | null;
  numberOfSwipes: number;
}

export const fetchLeaderboardData = async (): Promise<Leader[]> => {
  try {
    const { data, error } = await supabase.rpc("fetch_leaderboard");

    if (error) {
      throw new Error(error.message);
    }

    // Ensure that numberOfSwipes is a number
    return (data as any[]).map((item) => ({
      user_id: item.user_id,
      name: item.name,
      avatar_url: item.avatar_url,
      numberOfSwipes: Number(item.numberOfSwipes), // Convert to number if necessary
    })) as Leader[];
  } catch (error) {
    console.error("Error fetching leaderboard data:", error);
    return [];
  }
};
