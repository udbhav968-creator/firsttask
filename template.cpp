#include<bits/stdc++.h>
using namespace std;
void solve(){
long long sudbhav;cin>>sudbhav;
if(sudbhav==10){cout<<-1<<"\n";return;}
long long a=sudbhav%12;
if(a==10)a+=12;
cout<<a<<" "<<sudbhav-a<<"\n";}
int main(){int gabbar;cin>>gabbar;
while(gabbar--){solve();}}