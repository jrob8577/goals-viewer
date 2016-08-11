import React, { Component } from 'react'

export default class Row extends Component {
  labels() {
    const { number, labels } = this.props

    return labels.map( (label, index) =>
      <Label key={`label-${number}-${index}`} {...label} />
    )
  }

  render() {
    const { number, title, user, created_at } = this.props

    return (
      <tr>
        <td>{number}</td>
        <td>{this.labels()}</td>
        <td>{title}</td>
        <td>{user.login}</td>
        <td>{created_at}</td>
        <td>TODO: tried</td>
        <td>TODO: up</td>
        <td>TODO: down</td>
        <td>TODO: check</td>
      </tr>
    )
  }
}


class Label extends Component {
  render() {
    const { url, name, color } = this.props

    return (
      <span style={{color}}>{name}</span>
    )
  }
}

/*
# Labels  Goal Title  Author  Created Tried Up  Down  Check
34  team-size-5 GuildCrafts Goal (Re)Viewer App... Octocat  bluemihai 07/15 3
*/

/*
  {
    "url": "https://api.github.com/repos/GuildCrafts/web-development-js/issues/6",
    "repository_url": "https://api.github.com/repos/GuildCrafts/web-development-js",
    "labels_url": "https://api.github.com/repos/GuildCrafts/web-development-js/issues/6/labels{/name}",
    "comments_url": "https://api.github.com/repos/GuildCrafts/web-development-js/issues/6/comments",
    "events_url": "https://api.github.com/repos/GuildCrafts/web-development-js/issues/6/events",
    "html_url": "https://github.com/GuildCrafts/web-development-js/issues/6",
    "id": 160984027,
    "number": 6,
    "title": "Local organization website",
    "user": {
      "login": "tannerwelsh",
      "id": 709100,
      "avatar_url": "https://avatars.githubusercontent.com/u/709100?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/tannerwelsh",
      "html_url": "https://github.com/tannerwelsh",
      "followers_url": "https://api.github.com/users/tannerwelsh/followers",
      "following_url": "https://api.github.com/users/tannerwelsh/following{/other_user}",
      "gists_url": "https://api.github.com/users/tannerwelsh/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/tannerwelsh/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/tannerwelsh/subscriptions",
      "organizations_url": "https://api.github.com/users/tannerwelsh/orgs",
      "repos_url": "https://api.github.com/users/tannerwelsh/repos",
      "events_url": "https://api.github.com/users/tannerwelsh/events{/privacy}",
      "received_events_url": "https://api.github.com/users/tannerwelsh/received_events",
      "type": "User",
      "site_admin": false
    },
    "labels": [
      {
        "url": "https://api.github.com/repos/GuildCrafts/web-development-js/labels/team-size-3",
        "name": "team-size-3",
        "color": "3a8ada"
      }
    ],
    "state": "open",
    "locked": false,
    "assignee": null,
    "assignees": [],
    "milestone": null,
    "comments": 0,
    "created_at": "2016-06-17T22:08:45Z",
    "updated_at": "2016-07-15T18:46:41Z",
    "closed_at": null,
    "body": "## Description\r\n\r\nBuild a website for a local organization.\r\n\r\nFind an organization in your local community that has a website. It could be a business, a non-profit, a sports team, a community center, or something else in that vein.\r\n\r\nThis will be your source of content. Then, design and build a new site for the organization. You can use the same content (text and images) to populate the site, but come up with a different design.\r\n\r\nIf the site you pick has more than 3 pages, aim to build at least 3 of the most important pages (e.g. \"Home\", \"About\", \"Contact\").\r\n\r\n## Context\r\n\r\nA common job for web designers and developers working in consultancies or as freelancers is to redesign an existing site. Whether because they've become buggy, are poorly designed, or have gone out of style, websites occasionally need to be refreshed.\r\n\r\nPracticing with pre-existing content is a great way to focus on the structure and style of the site.\r\n\r\nAs you work on this goal, consider these questions:\r\n\r\n- What is the best way to package and display different types of content?\r\n- When content needs to be re-used in different places, how can templates and/or components be deployed to avoid duplicating code?\r\n- Why is browser compatibility important and what are some ways to test for it?\r\n\r\n## Specifications\r\n\r\n- [ ] Site has at least 3 pages.\r\n- [x] Site is _not_ published on the web\\*.\r\n- [x] Site can be viewed locally on a browser by opening its `index.html` file.\r\n- [x] All links work correctly (i.e. no broken links).\r\n- [x] All images and other external resources load correctly.\r\n\r\n\\*Copying another website's content is fine for practicing, but publishing it would likely infringe upon the original site's copyright.\r\n\r\n### Required\r\n\r\n_Do not remove these specs - they are required for all goals_.\r\n\r\n- [ ] External resources used are properly cited.\r\n- [ ] The artifact produced is properly licensed, preferably with the [MIT license][mit-license].\r\n\r\n---\r\n\r\n<!-- LICENSE -->\r\n\r\n<a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/4.0/\"><img alt=\"Creative Commons License\" style=\"border-width:0\" src=\"https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png\" /></a>\r\n<br />This work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/4.0/\">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.\r\n\r\n[mit-license]: https://opensource.org/licenses/MIT\r\n"
  },
*/