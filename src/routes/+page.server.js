import { getUserMatchData } from "$lib/index";
/**
 * @param {any} url
 */
export async function load({ url }) {
    // TODO: Refactor validation handling. Occurs in index.js but should happen server side (load function) 
    let userId = url.searchParams.get('userid');
    const userMatchData = await getUserMatchData(userId);
    // TODO: handle ts types (wanted to remove red lines, could be bc I chose TS when creating project it's being more sensitive to Types (which isn't a bad thing))
    // @ts-ignore
    if (userMatchData.data) {
        // @ts-ignore
        return userMatchData.data;
    }
    // @ts-ignore
    if (userMatchData.Error) {
        // @ts-ignore
        return userMatchData;
    }


}
