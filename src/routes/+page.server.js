/**
 * @param {string} userId
 */
export async function getUserMatchData(userId) {
    try {
        const res = await fetch(`http://localhost:3000/matches_by_user/?user_id=${userId}`);
        if (res.status === 200) {
            const data = await res.json();
            return { data };
        } else {
            return { data: { "errorMessage": "API Failure - Bad Request" } }
        }
    } catch (error) {
        return { data: { "errorMessage": "API Failure - Fetch Failed" } }
    }
}

/**
 * @param {any} url
 */
export async function load({ url }) {
    // TODO: handle routes better
    // NOTE: for sake of challenge, assuming userId qp in URL means the user is signed in (and auth flows were successful)
    let userId = url.searchParams.get('userid');
    if (userId) {
        const userMatchData = await getUserMatchData(userId);
        return userMatchData.data;
    } else {
        return { 'errorMessage': 'User Not Authenticated. Sign In or Create Account.' }
    }
}
