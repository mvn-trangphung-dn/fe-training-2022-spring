export default function PageFooter() {
  const iframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.703952223455!2d108.23643081472414!3d16.08084528887375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314217013c0793c9%3A0xaf2962829210131b!2sChi%20nh%C3%A1nh%20C%C3%B4ng%20ty%20TNHH%20Monstar%20Lab%20Vi%E1%BB%87t%20Nam!5e0!3m2!1sen!2s!4v1646975864995!5m2!1sen!2s" style="border:0;" allowFullScreen="" loading="lazy"></iframe>'; 
  return (
    <footer className="page-footer">
    <div className="footer-top">
      <div className="container content-wapper">
      <span>Please raise feedback or questions on <a target="_blank" href="">GitHub</a></span>
      <div><a class="link-normal" target="_blank" href="">React Learning</a>&nbsp;©&nbsp;&nbsp;<strong>Monstarlab Vietnam Co., Ltd. 2022</strong></div>
      </div>
    </div>
  </footer>
  )
}
