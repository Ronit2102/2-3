def best_fit(blocks, processes):
    alloc, rem = [], blocks[:]
    for p in processes:
        b = min((x for x in rem if x >= p), default=None)
        if b:
            alloc.append(f"{b} KB (Remaining: {b-p} KB)")
            rem[rem.index(b)] -= p
        else:
            alloc.append("Fails (No large enough block)")
    return alloc

def print_table(blocks, processes, alloc):
    print("\nBest Fit Algorithm\n{:<8} {:<8} {}".format("Process", "Need", "Allocated"))
    for i, p in enumerate(processes):
        print("{:<8} {:<8} {}".format(f"P{i+1}", f"{p} KB", alloc[i]))

if __name__ == "__main__":
    blocks = list(map(int, input("Enter the sizes of available memory blocks (in KB): ").split()))
    processes = list(map(int, input("Enter the sizes of processes (in KB): ").split()))
    print_table(blocks, processes, best_fit(blocks, processes))
