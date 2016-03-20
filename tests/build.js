var nerdamer = require('../nerdamer.core');

var test_cases = {
    '-x^2+1': {
        params: ['x'],
        one_expected: -3.41,
        two_expected: -3.41
    },
    '-x^2+y': {
        params: ['y', 'x'],
        one_expected: -1.1100000000000003,
        two_expected: -8.79
    },
    '5*(cos(x^2)+y)': {
        params: ['y', 'x'],
        one_expected: 15.010991793381834,
        two_expected: 9.973108618869924
    },
    'sec(z)+5*(cos(x^2)+y)': {
        params: ['z', 'y', 'x'],
        one_expected: 16.86180751106276,
        two_expected: 17.220709873373476
    },
    '(sec(z)+5*(cos(x^2)+y))^2-x': {
        params: ['z', 'y', 'x'],
        one_expected: 282.22055254013253,
        two_expected: 295.5528485429027
    },
    '(x+1)+(y+2)+(z+3)': {
        params: ['z', 'y', 'x'],
        one_expected: 12.399999999999999,
        two_expected: 12.4
    },
    '(((x+1)+(y+2))^2+(z+3))^x': {
        params: ['z', 'y', 'x'],
        one_expected: 8555.83476461652,
        two_expected: 58.39
    },
    'sqrt(x)*sqrt(5)': {
        params: ['x'],
        one_expected: 3.2403703492039306,
        two_expected: 3.2403703492039306
    },
    'abs(-x)-x': {
        params: ['x'],
        one_expected: 0,
        two_expected: 0
    },
    'sec(x)+tan(z)^2+ceil(y)': {
        params: ['z', 'x', 'y'],
        one_expected: 4.444717164847536,
        two_expected: 2.910896226522566
    },
    'mod(y,2)': {
        params: ['y'],
        one_expected: 0.10000000000000009,
        two_expected: 0.10000000000000009
    },
    'fact(6)*min(x, y)*z': {
        params: ['x','z','y'],
        one_expected: 1512,
        two_expected: 2376
    },
    '((x+y)^2+(y+2)+(z+3))^(x+y)': {
        params: ['x', 'z', 'y'],
        one_expected: 362284798.5739881,
        two_expected: 9072.850179772464
    },
    'asin(0.2)+atan(0.1)+acosh(y)': {
        params: [ 'y'],
        one_expected: 1.673885717524073,
        two_expected: 1.673885717524073
    },
    '(sin(z)*cos(y))^(tan(2)+1)': {
        params: [ 'y', 'z'],
        one_expected: 20.054910364061293,
        two_expected: 20.054910364061293
    },
    'cos(x+tan(x+sin(x)))^2': {
        params: [ 'x'],
        one_expected: 0.1168736998021759,
        two_expected: 0.1168736998021759
    },
};

var runtests = function(test_cases, verbose) {
    var args = [2.1, 3.3, 1],
        report = 'Running tests for core build function... \n------------------------------------ \n',
        failed = 0,
        num_tests = 0;

    for(var x in test_cases) { console.log(x)
        num_tests += 2;
        var test_case = test_cases[x],
            f = nerdamer(x).buildFunction(),
            f2 = nerdamer(x).buildFunction(test_case.params),
            result1 = f.apply(null, args),
            passed1 = result1 === test_case.one_expected,
            result2 = f2.apply(null, args),
            passed2 =  result2 === test_case.two_expected;

        if(!passed1) {
            report += 'Test 1 failed for '+x+'. Expected '+test_case.one_expected+' but received '+result1+'\n';
            failed++;
        }
        else if(verbose) {
            report += 'Test1 for '+x+' passed with '+result1+'\n';
        }
        if(!passed2) {
            report += 'Test 2 failed for '+x+'. Expected '+test_case.two_expected+' but received '+result2+'\n';
            failed++;
        }
        else if(verbose) {
            report += 'Test2 for '+x+' passed with '+ result2+'\n';
        }
    };
    
    report += 'Completed '+num_tests+' tests \n';
    report += failed+' tests failed.';
    
    return report;
};

var report = runtests(test_cases, true);

console.log(report);

