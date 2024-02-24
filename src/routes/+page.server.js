import { getUserMatchData } from "$lib/index";
/**
 * @param {any} url
 */
export async function load({ url }) {
    // TODO: validations, error handling
    let userId = url.search.split('=')[1];
    const userMatchData = await getUserMatchData(userId);

    return {
        userMatchData,
        currentUrl: url.href,
    };
}
