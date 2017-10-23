var empty = '<a href=""></a>';

// Authors (in alphabetical order):
var akiba_masahiro = '<a href="http://www.octnews.org/topic/profile/masahiro-akiba/">Masahiro Akiba</a>';
var cham_tatjen = '<a href="http://www.ntu.edu.sg/home/astjcham/">Tat-Jen Cham</a>';
var chang_shihfu = '<a href="http://www.ee.columbia.edu/~sfchang/">Shih-Fu Chang</a>';
var chen_lin = '<a href="https://sites.google.com/site/gggchenlin/home">Lin Chen</a>';
var chen_xiangyu = '<a href="http://scholar.google.com/citations?user=oHQHAYcAAAAJ&hl=en">Xiangyu Chen</a>';
var cheng_jun = '<a href="https://sites.google.com/site/samjcheng">Jun Cheng</a>';
var chua_tatseng = '<a href="http://www.comp.nus.edu.sg/~chuats/">Tat-Seng Chua</a>';
var duan_lixin = 'Lixin Duan';
var gao_shenghua = '<a href="https://sites.google.com/site/homepagegao/">Gao Shenghua</a>';
var jia_yunde = '<a href="http://scholar.google.com/citations?user=Sl6TV7gAAAAJ&hl=en">Yunde Jia</a>';
var li_wen = '<a href="https://sites.google.com/site/xyzliwen/">Wen Li</a>';
var liu_huiying = '<a href="http://scholar.google.com/citations?user=ivHE9dkAAAAJ&hl=en">Huiying Liu</a>';
var liu_jiang = '<a href="http://www.i2r.a-star.edu.sg/profile/dr-liu-jiang-jimmy">Jiang Liu</a>';
var liu_jianyi = '<a href="http://www.aiar.xjtu.edu.cn/info/1109/1127.htm">Jianyi Liu</a>';
var luo_jiebo = '<a href="http://www.cs.rochester.edu/u/jluo/">Jiebo Luo</a>';
var maybank_steve = '<a href="http://www.dcs.bbk.ac.uk/~sjmaybank/">Steve Maybank</a>';
var tao_dacheng = '<a href="http://www.uts.edu.au/staff/dacheng.tao">Dacheng Tao</a>';
var tsang_ivor = '<a href="http://www.uts.edu.au/staff/ivor.tsang">Ivor Wai-Hung Tsang</a>';
var wong_damon = '<a href="http://dicom.i2r.a-star.edu.sg/iMed/?q=people">Damon Wing Kee Wong</a>';
var wong_tienyin = '<a href="http://www.sph.nus.edu.sg/index.php/component/virtuemart/academic/wong-tien-yin-detail?Itemid=0">Tien Yin Wong</a>';
var wu_xinxiao = '<a href="http://scholar.google.com/citations?user=iZHC_EQAAAAJ&hl=en">Xinxiao Wu</a>';
var xu_dong = '<a href="http://www3.ntu.edu.sg/home/dongxu/">Dong Xu</a>';
var xu_yanwu = '<a href="https://sites.google.com/site/xuyanwu1982/">Yanwu Xu</a>';
var yan_shuicheng = '<a href="http://www.ece.nus.edu.sg/stfpage/eleyans/">Shuicheng Yan</a>';

// Journals (in alphabetical order):
var sp = "Signal Processing";
var tcsvt = "IEEE Transactions on Circuits Systems for Video Technology (T-CSVT)";
var tip = "IEEE Transactions on Image Processing (T-IP)";
var tnnls = "IEEE Transactions on Neural Networks and Learning Systems (T-NNLS)";
var tpami = "IEEE Transactions on Pattern Analysis and Machine Intelligence (T-PAMI)";

// Conferences (in alphabetical order):
var accv = "Asian Conference on Computer Vision (ACCV)";
var cvpr = "IEEE International Conference on Computer Vision and Pattern Recognition (CVPR)";
var embc = "IEEE International Conference on the Engineering in Medicine and Biology Society (EMBC)";
var iccv = "IEEE International Conference on Computer Vision (ICCV)";
var icdm = "International Conference on Data Mining (ICDM)";
var icml = "International Conference on Machine Learning (ICML)";
var miccai = "International Conference on Medical Image Computing and Computer Assisted Intervention (MICCAI)";


function print_publication(title, author_list, venue, year, pdf, bibtex, slides, code) {
    document.write('<strong>' + title + '</strong><br/>');
    document.write(author_list.join(", ") + '<br/>');
    document.write(venue + ', ' + year + '<br/>');
    if (pdf) document.write('<a href="/papers/' + pdf + '">[PDF]</a> ');
    if (bibtex) document.write('<a href="/bib_files/' + bibtex + '">[BibTeX]</a> ');
    if (slides) document.write('<a href="/papers/' + slides + '">[Slides]</a> ');
    if (code) document.write('<a href="/code/' + code + '">[Code]</a>');
}