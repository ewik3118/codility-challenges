    function solution(A, B, C)
    {
    let i, index, weight, n;
    	n = A.length;
    	if(n === 0) return 0;

    	for(i=0; i<n; i++) {
    			if(B[i] > A[i]) 
    			return i; 
    			else {
    				index = i;
    				while(index>=0){
    					index = C[index];
    					B[index] += B[i];
    					if(B[index] > A[index]) return i;
    				}
    			}
    	}
    	return i;
    }


A=[2, 3]; B=[3, 3]; C=[-1, -1];


console.log(solution(A,B,C));