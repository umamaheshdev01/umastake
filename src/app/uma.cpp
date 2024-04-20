#include <iostream>
#include <vector>
using namespace std;

void heapify(vector<int>& arr, int n, int i) {
    int smallest = i;
    int left = 2 * i + 1;
    int right = 2 * i + 2;

    if (left < n && arr[left] < arr[smallest])
        smallest = left;

    if (right < n && arr[right] < arr[smallest])
        smallest = right;

    if (smallest != i) {
        swap(arr[i], arr[smallest]);
        heapify(arr, n, smallest);
    }
}

void buildHeap(vector<int>& arr) {
    int n = arr.size();
    for (int i = n / 2 - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }
}

void heapSort(vector<int>& arr) {
    int n = arr.size();

    buildHeap(arr);

    for (int i = n - 1; i > 0; i--) {
        swap(arr[0], arr[i]);
        heapify(arr, i, 0);
    }
}

int main() {
    int n;
    cout << "Enter the number of elements: ";
    cin >> n;

    vector<int> arr(n);
    cout << "Enter the elements:";
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }

    heapSort(arr);

    int minElement = arr[n-1];
    cout << "Minimum element: " << minElement << endl;

    cout << "Sorted array in descending order:\n";
    for (int i = 0; i <n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;

    return 0;
}
