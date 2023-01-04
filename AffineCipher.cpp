// Q1.Affine Cipher
#include <bits/stdc++.h>
//#include "EuclideanGcd"
using namespace std;

int EuclideanGcd(int a, int b)
{
	int s, g, rem;
	if (a < b)
	{
		s = a;
		g = b;
	}

	else
	{
		s = b;
		g = a;
	}

	rem = g % s;

	if (rem == 0)
	{
		cout << s << endl;
	}

	else
	{
		while (rem != 0)
		{
			g = s;
			s = rem;
			rem = g % s;
		}
	}
	return s;
}

int inverse(int key)
{
	int q, r, t1, t2, t;
	t1 = 0;
	t2 = 1;
	int a = 26;
	int b = key;
	while (b)
	{
		q = a / b;
		r = a % b;
		t = t1 - (q * t2);
		a = b;
		b = r;
		t1 = t2;
		t2 = t;
	}
	return t1;
}

int main()
{
	cout << "Enter Multiplicative factor alpha and Additive Key Beta:";
	int a, b;
	cin >> a >> b;

	cout << "Enter Plain text: ";
	string pt;
	cin >> pt;
	int len = pt.length();
	char r[len];
	char k[len];

	if (EuclideanGcd(a, 26) != 1)
	{
		cout << "Invalid Value of alpha which inverse doesn't Exist." << endl;
		return 0;
	}
	else
		for (int i = 0; i < len; i++)
		{
			r[i] = char(((((int(pt[i]) - 97) * a) + b) % 26) + 97);
		}
	cout << "Encryption:Cipher Text=> ";
	for (int i = 0; i < len; i++)
	{
		cout << r[i];
	}
	cout << endl;
	//==================Decryption====================
	int invk1 = inverse(a);
	if (invk1 < 0)
		invk1 += 26;
	// cout << invk1;

	for (int i = 0; i < len; i++)
	{
		k[i] = char((invk1 * (((int(r[i]) - 97) - b) + 26) % 26) + 97);
	}
	cout << "Decryption:Plain Text=> ";
	for (int i = 0; i < len; i++)
	{
		cout << k[i];
	}
	cout << endl;
	return 0;
}
