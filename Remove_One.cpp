#include <bits/stdc++.h>
using namespace std;
typedef long long int ll;
void solve()
{
    long long int n, l, s;
    cin >> n >> l >> s;
    vector<long long int> v;
    for (int i = 1; i <= n; i++)
    {
        v.push_back(i);
    }
    if (n == l)
    {
        if (s == n * (n + 1) / 2)
        {
            cout << "YES" << endl;
        }
        else
        {
            cout << "NO" << endl;
        }
    }
    ll x = l + 1;
    map<ll, ll> map1;
    ll i = 0, j = 0, sum = 0, f = 0;
    while (j < n && i < n)
    {
        sum += v[j];
        if (j - i + 1 < x)
        {
            map1[v[j]]++;
            j++;
        }
        else if (j - i + 1 == x)
        {
            if (map1.find(sum - s) != map1.end())
            {
                f = 1;
                break;
            }
            map1[v[i]]--;
            if (map1[v[i]] == 0)
            {
                auto q = map1.find(v[i]);
                map1.erase(q);
            }
            sum -= v[i];
            i++;
            j++;
        }
        if (f == 1)
            break;
    }
    if (f == 1)
        cout << "YES" << endl;
    else
        cout << "NO" << endl;
}
int main()
{
    int t;
    cin >> t;
    while (t--)
    {
        solve();
    }
    return 0;
}