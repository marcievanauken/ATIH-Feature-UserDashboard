/**
 * @param {string} userId
 */

export async function getUserMatchData(userId) {
    try {
        if (userId) {
            const res = await fetch(`http://localhost:3000/matches_by_user/?user_id=${userId}`);
            const data = await res.json();
            console.log(data)

            return { data };
        }
        else {
            // TODO: Authentication handling to move to page.server.js
            throw ({ 'Error': 'User Not Authenticated' })
        }
    } catch (error) {
        return error;
    }

}