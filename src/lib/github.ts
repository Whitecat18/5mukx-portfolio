interface GitHubRepoData {
    stargazers_count: number;
    description: string;
    html_url: string;
    name: string;
    owner: {
      login: string;
    };
  }
  
  export async function getRepoData(owner: string, repo: string): Promise<GitHubRepoData | null> {
    try {
      const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        },
        next: { revalidate: 3600 } // Cache for 1 hour
      });
      
      if (!response.ok) {
        console.error(`Error fetching GitHub data: ${response.status}`);
        return null;
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching GitHub data:', error);
      return null;
    }
  }
  
  export function extractRepoInfo(url: string): { owner: string; repo: string } | null {
    try {
      // GitHub URL pattern: https://github.com/owner/repo
      const urlObj = new URL(url);
  
      if (urlObj.hostname !== 'github.com') {
        return null;
      }
  
      const pathParts = urlObj.pathname.split('/').filter(Boolean);
  
      if (pathParts.length < 2) {
        return null;
      }
  
      return {
        owner: pathParts[0],
        repo: pathParts[1]
      };
    } catch (error) {
      console.error('Error parsing GitHub URL:', error);
      return null;
    }
  }
  