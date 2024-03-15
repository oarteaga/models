import { EbavelDataProviderBase, PaginationMode } from "../types";

export const EBAVEL_DATA_PROVIDER_MARKER = Symbol.for('EBAVEL_DATA_PROVIDER_MARKER');

export interface EbavelDataProvider<
    R extends Record<string, unknown>,
    P extends PaginationMode = 'index',
> extends EbavelDataProviderBase<R, P> {
    [EBAVEL_DATA_PROVIDER_MARKER]: true;
}

export function createDataProvider<
    R extends Record<string, unknown>,
    P extends PaginationMode = 'index',
>(input: EbavelDataProviderBase<R, P>): EbavelDataProvider<R, P> {
    return Object.assign(input, { [EBAVEL_DATA_PROVIDER_MARKER]: true as const });
}

export const defaultProvider = createDataProvider({
    async getRecords({ paginationModel: { start, pageSize } }) {

        const [app, model, view] = this.providerId?.split('.') ?? []

        console.log({ app, model, view })

        let records = []
        let schema = {}
        let totalCount = 0
        const page = (start / pageSize) + 1

        const url = `https://kpionline10.bitam.com/eBavel6_test/api/v1/fbm_bmd_0586/data/${model}/${view}?$pageSize=${pageSize}&$currentPage=${page}&$getBoxFilter=0&$onlyData=1&$requestDateId=1708664786809&requestTime=20240222230680&userActionID=2`
        const headers = new Headers({
            "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJCSVRBTSJ9.cixXPXJnTnZcdldYZT5fdllQV3VvVHB2XHZXUGJlYU9jYldFO3IsVypoZ3kmbz9TeFZ3I0NWIWUtaWdXKGhmPnlWd8KhdmghTydvIWF5cMK_YSNvenFOaWZXdXF6ZSZZelspb2JWJlYhT3Vwwr9bwr9vwr9XeFZ3wqF2X3dTPV9UPSxaUVYtVnYqdmghVylxwr9beXB4aSNvenF5cCFPLG5mQT1Wd8Khdlp3V3ZcUXAsWmZfK1tRaD1ad1IsaVFXeltRdXdod2V6aHdOLWhjYXloelIrWndwQVstUj5aUVI_aVF4QWl6XyxbelI_Wz9owr9pVFYsWmZSPlstVi1bYldFc19l.",
        });

        const response = await fetch(url, {
            method: "POST",
            headers
        }).then((res) =>
            res.json()
        )
        console.log(response)
        if (!response.error) {
            records = response.payload.data[response.payload.schema.key]
            totalCount = response.payload.pagination[response.payload.schema.key].totalRows
            schema = response.payload.schema
        }

        console.log({ records })
        return {
            records,
            totalCount,
            schema
        };
    },
})

