import alfred from "@liangshen/alfred";
import axios from "axios";

const q = /boost-exact:\S+/.test(alfred.input) ? alfred.input : `${alfred.input} boost-exact:false`;
const res = await axios.get<NpmsSearch>(`https://api.npms.io/v2/search`, {
    params: {
        q,
        size: 20
    }
})
const items = res.data.results.filter(result => result.package.name.length > 1).map(result => {
    const pkg = result.package;

    return {
        title: pkg.name,
        subtitle: pkg.description,
        arg: pkg.links.repository || pkg.links.npm,
        mods: {
            alt: {
                arg: pkg.links.npm,
                subtitle: 'Open the npm page instead of the GitHub repo',
            },
            cmd: {
                subtitle: cmdSubtitle(pkg),
            },
            ctrl: {
                arg: pkg.name,
                subtitle: 'Copy package name',
            },
        },
        quicklookurl: pkg.links.repository && `${pkg.links.repository}#readme`,
    };
});
alfred.output({items: items})

interface NpmsSearch {
    total: number;
    results: Result[]
}

interface Result {
    package: Package
}
interface Package {
    name: string;
    scope: string;
    version: string;
    description: string;
    date: string;
    links: Links;
    publisher: User;
    maintainers: User[];
}
interface Links {
    npm: string;
    repository: string;
    homepage: string;
    bugs: string;
}
interface User {
    username: string;
    email: string;
}

/**
 @param {object} pkg - A single package from the npms API.
 @returns {string} The command-modifier subtitle for the package.
 */
function cmdSubtitle({author, date, publisher, version}: any) {
    let subtitle = `${version}`;

    // TODO: Behind an if-statement because of https://github.com/npms-io/npms-api/issues/82
    if (date) {
        subtitle += ` published at ${date}`;
    }

    if (author) {
        subtitle += ` by ${(author && author.name)}`;
    } else if (publisher) {
        subtitle += ` by ${publisher.username}`;
    }

    return subtitle;
}