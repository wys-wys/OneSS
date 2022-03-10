import {Giscus} from '@giscus/react';

import giscus from "@/setting/giscusSetting";


export default function Comments() {

    const {repo, repo_id, category, category_id, term} = giscus

    return (
        <Giscus repo={repo as `${string}/${string}`}
                repoId={repo_id}
                category={category}
                categoryId={category_id}
                mapping={'specific'}
                term={term}
                reactionsEnabled={'1'}
                emitMetadata={'0'}
                inputPosition={'top'}
                theme={'/'}
                lang={'en'}
        />
    )
}