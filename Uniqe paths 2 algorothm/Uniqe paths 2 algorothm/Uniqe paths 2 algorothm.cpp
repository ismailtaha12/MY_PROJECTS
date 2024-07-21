#include <iostream>
#include <vector>
using namespace std;

int unique_paths_with_obstacles(const vector<vector<int>>& obstacleGrid) {
    int m = obstacleGrid.size();
    int n = obstacleGrid[0].size();
    vector<vector<int>> dp(m, vector<int>(n, 0));

    if (obstacleGrid[0][0] == 1 || obstacleGrid[m - 1][n - 1] == 1) {
        return 0;
    }

    dp[0][0] = 1;

    for (int i = 1; i < m; ++i) {
        dp[i][0] = obstacleGrid[i][0] == 1 ? 0 : dp[i - 1][0];
    }

    for (int j = 1; j < n; ++j) {
        dp[0][j] = obstacleGrid[0][j] == 1 ? 0 : dp[0][j - 1];
    }

    for (int i = 1; i < m; ++i) {
        for (int j = 1; j < n; ++j) {
            if (obstacleGrid[i][j] == 1) {
                dp[i][j] = 0;
            }
            else {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
    }

    return dp[m - 1][n - 1];
}


int unique_paths_brute_force(const vector<vector<int>>& obstacleGrid, int m, int n) {
    if (m < 0 || n < 0 || obstacleGrid[m][n] == 1) {
      
        return 0;
    
    }

    if (m == 0 && n == 0) {
       
        return 1;
    
    }
   
    return unique_paths_brute_force(obstacleGrid, m - 1, n) + unique_paths_brute_force(obstacleGrid, m, n - 1);
}

int main() {

   /* vector<vector<int>> obstacleGrid = {
        {0,0,0,0},
        {1,0,1,0},
        {0,0,0,0}
    };*/


    vector<vector<int>> obstacleGrid = {
        {0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0},
        {0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0},
        {0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0},
        {0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0},
        {0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0},
        {0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0},
        {0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0},
        {0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0},
        {0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0}
    };



    cout << "Number of unique paths using dynamic programming is: " << unique_paths_with_obstacles(obstacleGrid) << endl;

    /*
 * Time Complexity: O(m * n)
 * - We iterate over each cell in the grid exactly once.
 *
 * Space Complexity: O(m * n)
 * - We use a 2D dp array of size m x n to store the number of unique paths to each cell.
 */


    int m = obstacleGrid.size() - 1;
    int n = obstacleGrid[0].size() - 1;

    cout << "Number of unique paths using brute force is: " << unique_paths_brute_force(obstacleGrid, m, n) << endl;
    /*
 * Time Complexity: O(2^(m + n))
 * - In the worst case, each cell in the grid has two recursive calls.
 *
 * Space Complexity: O(m + n)
 * - The recursion stack can go as deep as the sum of the dimensions of the grid.
 */
    return 0;
}
