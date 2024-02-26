/**
 * @param {string} userId
 */
export async function getUserMatchData(userId) {
    try {
        const res = await fetch(`http://localhost:3000/matches_by_user/?user_id=${userId}`);
        if (res.status === 404) {
            return { data: { "message": "API Failure - Bad Request" } }
        }
        // NOTE: Mock successful authentication handling
        if (userId && res.status === 200) {
            const data = await res.json();
            return { data };
        } else {
            // NOTE: Mock error authentication handling. Test by excluding userId qp in URL
            return { data: { 'message': 'User Not Authenticated. Sign In or Create Account.' } }
        }
    } catch (error) {
        return { data: { "message": "API Failure - Fetch Failed" } }
    }

}

/**
 * @param {any} url
 */
export async function load({ url }) {
    // TODO: handle routes
    if (url.href === 'http://localhost:5173/') {
        return { 'message': 'Home Page' }
    }
    // NOTE: assuming userId qp in URL means the user is signed in (and auth flows were successful)
    let userId = url.searchParams.get('userid') ? url.searchParams.get('userid') : undefined;
    const userMatchData = await getUserMatchData(userId);
    return userMatchData.data;
}
