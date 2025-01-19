const octokit = new Octokit({ });

const result = async function(){ await  octokit.request('GET /repos/Jmr3366/soundShare/contents/audio', {
  owner: 'OWNER',
  repo: 'REPO',
  path: 'PATH',
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
})
}
document.getElementById("response").innerText = result;
