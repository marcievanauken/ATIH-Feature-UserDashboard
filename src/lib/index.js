/**
 * @param {string} userId
 */
export async function getUserMatchData(userId) {
    console.log(userId)
    const res = await fetch(`http://localhost:3000/matches_by_user/?user_id=${userId}`);
    const data = await res.json();
    return { data };
}