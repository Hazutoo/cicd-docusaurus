import React from 'react';
import Layout from '@theme/Layout';

export default function Hello() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
      <div class="mxgraph" style="max-width:100%;border:1px solid transparent;" data-mxgraph="{&quot;highlight&quot;:&quot;#0000ff&quot;,&quot;nav&quot;:true,&quot;resize&quot;:true,&quot;toolbar&quot;:&quot;zoom layers tags lightbox&quot;,&quot;edit&quot;:&quot;_blank&quot;,&quot;xml&quot;:&quot;&lt;mxfile host=\&quot;app.diagrams.net\&quot; modified=\&quot;2023-06-19T11:19:27.011Z\&quot; agent=\&quot;Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36\&quot; etag=\&quot;Sad0CIqDj53Zdv-I04iG\&quot; version=\&quot;21.4.0\&quot; type=\&quot;browser\&quot;&gt;\n  &lt;diagram name=\&quot;Page-1\&quot; id=\&quot;HVmXL5sHhcgq2mJ9Op_s\&quot;&gt;\n    &lt;mxGraphModel dx=\&quot;1656\&quot; dy=\&quot;797\&quot; grid=\&quot;1\&quot; gridSize=\&quot;10\&quot; guides=\&quot;1\&quot; tooltips=\&quot;1\&quot; connect=\&quot;1\&quot; arrows=\&quot;1\&quot; fold=\&quot;1\&quot; page=\&quot;1\&quot; pageScale=\&quot;1\&quot; pageWidth=\&quot;850\&quot; pageHeight=\&quot;1100\&quot; math=\&quot;0\&quot; shadow=\&quot;0\&quot;&gt;\n      &lt;root&gt;\n        &lt;mxCell id=\&quot;0\&quot; /&gt;\n        &lt;mxCell id=\&quot;1\&quot; parent=\&quot;0\&quot; /&gt;\n        &lt;mxCell id=\&quot;WVN11N4hpTEZWdmhbh4R-32\&quot; value=\&quot;\&quot; style=\&quot;rounded=0;whiteSpace=wrap;html=1;shadow=1;glass=0;\&quot; parent=\&quot;1\&quot; vertex=\&quot;1\&quot;&gt;\n          &lt;mxGeometry x=\&quot;20\&quot; y=\&quot;20\&quot; width=\&quot;730\&quot; height=\&quot;540\&quot; as=\&quot;geometry\&quot; /&gt;\n        &lt;/mxCell&gt;\n        &lt;mxCell id=\&quot;rb91IepDbKmKeglVDOLt-3\&quot; style=\&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;\&quot; parent=\&quot;1\&quot; source=\&quot;rb91IepDbKmKeglVDOLt-1\&quot; target=\&quot;rb91IepDbKmKeglVDOLt-2\&quot; edge=\&quot;1\&quot;&gt;\n          &lt;mxGeometry relative=\&quot;1\&quot; as=\&quot;geometry\&quot; /&gt;\n        &lt;/mxCell&gt;\n        &lt;mxCell id=\&quot;rb91IepDbKmKeglVDOLt-4\&quot; value=\&quot;git push\&quot; style=\&quot;edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];\&quot; parent=\&quot;rb91IepDbKmKeglVDOLt-3\&quot; vertex=\&quot;1\&quot; connectable=\&quot;0\&quot;&gt;\n          &lt;mxGeometry x=\&quot;0.1286\&quot; relative=\&quot;1\&quot; as=\&quot;geometry\&quot;&gt;\n            &lt;mxPoint x=\&quot;-4\&quot; as=\&quot;offset\&quot; /&gt;\n          &lt;/mxGeometry&gt;\n        &lt;/mxCell&gt;\n        &lt;mxCell id=\&quot;rb91IepDbKmKeglVDOLt-1\&quot; value=\&quot;code development\&quot; style=\&quot;rounded=1;whiteSpace=wrap;html=1;fillColor=#fff2cc;strokeColor=#d6b656;\&quot; parent=\&quot;1\&quot; vertex=\&quot;1\&quot;&gt;\n          &lt;mxGeometry x=\&quot;62.5\&quot; y=\&quot;260.47\&quot; width=\&quot;90\&quot; height=\&quot;40\&quot; as=\&quot;geometry\&quot; /&gt;\n        &lt;/mxCell&gt;\n        &lt;mxCell id=\&quot;WVN11N4hpTEZWdmhbh4R-20\&quot; value=\&quot;check k8s manifest\&quot; style=\&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;startArrow=classic;startFill=1;\&quot; parent=\&quot;1\&quot; source=\&quot;rb91IepDbKmKeglVDOLt-2\&quot; edge=\&quot;1\&quot;&gt;\n          &lt;mxGeometry relative=\&quot;1\&quot; as=\&quot;geometry\&quot;&gt;\n            &lt;mxPoint x=\&quot;280\&quot; y=\&quot;350\&quot; as=\&quot;targetPoint\&quot; /&gt;\n            &lt;Array as=\&quot;points\&quot;&gt;\n              &lt;mxPoint x=\&quot;280\&quot; y=\&quot;320\&quot; /&gt;\n              &lt;mxPoint x=\&quot;280\&quot; y=\&quot;320\&quot; /&gt;\n            &lt;/Array&gt;\n            &lt;mxPoint as=\&quot;offset\&quot; /&gt;\n          &lt;/mxGeometry&gt;\n        &lt;/mxCell&gt;\n        &lt;mxCell id=\&quot;rb91IepDbKmKeglVDOLt-2\&quot; value=\&quot;git repository\&quot; style=\&quot;rounded=1;whiteSpace=wrap;html=1;fillColor=#fff2cc;strokeColor=#d6b656;\&quot; parent=\&quot;1\&quot; vertex=\&quot;1\&quot;&gt;\n          &lt;mxGeometry x=\&quot;240\&quot; y=\&quot;260\&quot; width=\&quot;80\&quot; height=\&quot;40\&quot; as=\&quot;geometry\&quot; /&gt;\n        &lt;/mxCell&gt;\n        &lt;mxCell id=\&quot;rb91IepDbKmKeglVDOLt-6\&quot; value=\&quot;\&quot; style=\&quot;sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.users.user;\&quot; parent=\&quot;1\&quot; vertex=\&quot;1\&quot;&gt;\n          &lt;mxGeometry x=\&quot;67.9\&quot; y=\&quot;166.85\&quot; width=\&quot;79.21\&quot; height=\&quot;84.96\&quot; as=\&quot;geometry\&quot; /&gt;\n        &lt;/mxCell&gt;\n        &lt;mxCell id=\&quot;0_5IEmXz7XK9D90dtuqG-1\&quot; value=\&quot;\&quot; style=\&quot;shape=image;verticalLabelPosition=bottom;labelBackgroundColor=default;verticalAlign=top;aspect=fixed;imageAspect=0;image=https://cdn-icons-png.flaticon.com/512/25/25231.png;\&quot; parent=\&quot;1\&quot; vertex=\&quot;1\&quot;&gt;\n          &lt;mxGeometry x=\&quot;241.52\&quot; y=\&quot;170.85\&quot; width=\&quot;76.96\&quot; height=\&quot;76.96\&quot; as=\&quot;geometry\&quot; /&gt;\n        &lt;/mxCell&gt;\n        &lt;mxCell id=\&quot;WVN11N4hpTEZWdmhbh4R-2\&quot; value=\&quot;check commit\&quot; style=\&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0;entryY=0.5;entryDx=0;entryDy=0;exitX=1;exitY=0.5;exitDx=0;exitDy=0;endArrow=classic;endFill=1;startArrow=classic;startFill=1;\&quot; parent=\&quot;1\&quot; source=\&quot;rb91IepDbKmKeglVDOLt-2\&quot; target=\&quot;WVN11N4hpTEZWdmhbh4R-5\&quot; edge=\&quot;1\&quot;&gt;\n          &lt;mxGeometry relative=\&quot;1\&quot; as=\&quot;geometry\&quot;&gt;\n            &lt;mxPoint x=\&quot;350\&quot; y=\&quot;280\&quot; as=\&quot;sourcePoint\&quot; /&gt;\n          &lt;/mxGeometry&gt;\n        &lt;/mxCell&gt;\n        &lt;mxCell id=\&quot;WVN11N4hpTEZWdmhbh4R-12\&quot; value=\&quot;docker push\&quot; style=\&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0;entryY=0.5;entryDx=0;entryDy=0;\&quot; parent=\&quot;1\&quot; source=\&quot;WVN11N4hpTEZWdmhbh4R-5\&quot; target=\&quot;WVN11N4hpTEZWdmhbh4R-11\&quot; edge=\&quot;1\&quot;&gt;\n          &lt;mxGeometry relative=\&quot;1\&quot; as=\&quot;geometry\&quot; /&gt;\n        &lt;/mxCell&gt;\n        &lt;mxCell id=\&quot;WVN11N4hpTEZWdmhbh4R-5\&quot; value=\&quot;build (CI)\&quot; style=\&quot;rounded=1;whiteSpace=wrap;html=1;fillColor=#fff2cc;strokeColor=#d6b656;\&quot; parent=\&quot;1\&quot; vertex=\&quot;1\&quot;&gt;\n          &lt;mxGeometry x=\&quot;440\&quot; y=\&quot;260.47\&quot; width=\&quot;80\&quot; height=\&quot;40\&quot; as=\&quot;geometry\&quot; /&gt;\n        &lt;/mxCell&gt;\n        &lt;mxCell id=\&quot;WVN11N4hpTEZWdmhbh4R-10\&quot; value=\&quot;\&quot; style=\&quot;shape=image;verticalLabelPosition=bottom;labelBackgroundColor=default;verticalAlign=top;aspect=fixed;imageAspect=0;image=https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/TeamCity_Icon.svg/1200px-TeamCity_Icon.svg.png;\&quot; parent=\&quot;1\&quot; vertex=\&quot;1\&quot;&gt;\n          &lt;mxGeometry x=\&quot;441.5\&quot; y=\&quot;170.43\&quot; width=\&quot;77\&quot; height=\&quot;77\&quot; as=\&quot;geometry\&quot; /&gt;\n        &lt;/mxCell&gt;\n        &lt;mxCell id=\&quot;WVN11N4hpTEZWdmhbh4R-19\&quot; value=\&quot;check images\&quot; style=\&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0;entryY=0.5;entryDx=0;entryDy=0;startArrow=classic;startFill=1;\&quot; parent=\&quot;1\&quot; source=\&quot;WVN11N4hpTEZWdmhbh4R-11\&quot; target=\&quot;WVN11N4hpTEZWdmhbh4R-14\&quot; edge=\&quot;1\&quot;&gt;\n          &lt;mxGeometry x=\&quot;-0.4847\&quot; relative=\&quot;1\&quot; as=\&quot;geometry\&quot;&gt;\n            &lt;Array as=\&quot;points\&quot;&gt;\n              &lt;mxPoint x=\&quot;732\&quot; y=\&quot;280\&quot; /&gt;\n              &lt;mxPoint x=\&quot;732\&quot; y=\&quot;350\&quot; /&gt;\n              &lt;mxPoint x=\&quot;40\&quot; y=\&quot;350\&quot; /&gt;\n              &lt;mxPoint x=\&quot;40\&quot; y=\&quot;504\&quot; /&gt;\n            &lt;/Array&gt;\n            &lt;mxPoint as=\&quot;offset\&quot; /&gt;\n          &lt;/mxGeometry&gt;\n        &lt;/mxCell&gt;\n        &lt;mxCell id=\&quot;WVN11N4hpTEZWdmhbh4R-11\&quot; value=\&quot;docker repository\&quot; style=\&quot;rounded=1;whiteSpace=wrap;html=1;fillColor=#fff2cc;strokeColor=#d6b656;\&quot; parent=\&quot;1\&quot; vertex=\&quot;1\&quot;&gt;\n          &lt;mxGeometry x=\&quot;624.46\&quot; y=\&quot;260\&quot; width=\&quot;80\&quot; height=\&quot;40\&quot; as=\&quot;geometry\&quot; /&gt;\n        &lt;/mxCell&gt;\n        &lt;mxCell id=\&quot;WVN11N4hpTEZWdmhbh4R-13\&quot; value=\&quot;\&quot; style=\&quot;shape=image;verticalLabelPosition=bottom;labelBackgroundColor=default;verticalAlign=top;aspect=fixed;imageAspect=0;image=https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png;\&quot; parent=\&quot;1\&quot; vertex=\&quot;1\&quot;&gt;\n          &lt;mxGeometry x=\&quot;620\&quot; y=\&quot;175.28\&quot; width=\&quot;88.93\&quot; height=\&quot;76.11\&quot; as=\&quot;geometry\&quot; /&gt;\n        &lt;/mxCell&gt;\n        &lt;mxCell id=\&quot;WVN11N4hpTEZWdmhbh4R-23\&quot; value=\&quot;deploy\&quot; style=\&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0;entryY=0.5;entryDx=0;entryDy=0;\&quot; parent=\&quot;1\&quot; source=\&quot;WVN11N4hpTEZWdmhbh4R-14\&quot; target=\&quot;WVN11N4hpTEZWdmhbh4R-22\&quot; edge=\&quot;1\&quot;&gt;\n          &lt;mxGeometry relative=\&quot;1\&quot; as=\&quot;geometry\&quot;&gt;\n            &lt;mxPoint x=\&quot;200\&quot; y=\&quot;504.03999999999996\&quot; as=\&quot;targetPoint\&quot; /&gt;\n          &lt;/mxGeometry&gt;\n        &lt;/mxCell&gt;\n        &lt;mxCell id=\&quot;WVN11N4hpTEZWdmhbh4R-14\&quot; value=\&quot;deployment (CD)\&quot; style=\&quot;rounded=1;whiteSpace=wrap;html=1;fillColor=#fff2cc;strokeColor=#d6b656;\&quot; parent=\&quot;1\&quot; vertex=\&quot;1\&quot;&gt;\n          &lt;mxGeometry x=\&quot;65\&quot; y=\&quot;484.03999999999996\&quot; width=\&quot;80\&quot; height=\&quot;40\&quot; as=\&quot;geometry\&quot; /&gt;\n        &lt;/mxCell&gt;\n        &lt;mxCell id=\&quot;WVN11N4hpTEZWdmhbh4R-16\&quot; value=\&quot;\&quot; style=\&quot;shape=image;verticalLabelPosition=bottom;labelBackgroundColor=default;verticalAlign=top;aspect=fixed;imageAspect=0;image=https://cncf-branding.netlify.app/img/projects/argo/icon/color/argo-icon-color.png;\&quot; parent=\&quot;1\&quot; vertex=\&quot;1\&quot;&gt;\n          &lt;mxGeometry x=\&quot;62.5\&quot; y=\&quot;390\&quot; width=\&quot;85\&quot; height=\&quot;85\&quot; as=\&quot;geometry\&quot; /&gt;\n        &lt;/mxCell&gt;\n        &lt;mxCell id=\&quot;WVN11N4hpTEZWdmhbh4R-21\&quot; value=\&quot;\&quot; style=\&quot;shape=image;verticalLabelPosition=bottom;labelBackgroundColor=default;verticalAlign=top;aspect=fixed;imageAspect=0;image=https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/2109px-Kubernetes_logo_without_workmark.svg.png;\&quot; parent=\&quot;1\&quot; vertex=\&quot;1\&quot;&gt;\n          &lt;mxGeometry x=\&quot;236.74\&quot; y=\&quot;391\&quot; width=\&quot;86.52\&quot; height=\&quot;84\&quot; as=\&quot;geometry\&quot; /&gt;\n        &lt;/mxCell&gt;\n        &lt;mxCell id=\&quot;WVN11N4hpTEZWdmhbh4R-37\&quot; style=\&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;\&quot; parent=\&quot;1\&quot; source=\&quot;WVN11N4hpTEZWdmhbh4R-22\&quot; target=\&quot;WVN11N4hpTEZWdmhbh4R-36\&quot; edge=\&quot;1\&quot;&gt;\n          &lt;mxGeometry relative=\&quot;1\&quot; as=\&quot;geometry\&quot; /&gt;\n        &lt;/mxCell&gt;\n        &lt;mxCell id=\&quot;WVN11N4hpTEZWdmhbh4R-22\&quot; value=\&quot;orchestration\&quot; style=\&quot;rounded=1;whiteSpace=wrap;html=1;fillColor=#fff2cc;strokeColor=#d6b656;\&quot; parent=\&quot;1\&quot; vertex=\&quot;1\&quot;&gt;\n          &lt;mxGeometry x=\&quot;240\&quot; y=\&quot;484.03999999999996\&quot; width=\&quot;80\&quot; height=\&quot;40\&quot; as=\&quot;geometry\&quot; /&gt;\n        &lt;/mxCell&gt;\n        &lt;mxCell id=\&quot;WVN11N4hpTEZWdmhbh4R-25\&quot; value=\&quot;\&quot; style=\&quot;shape=image;verticalLabelPosition=bottom;labelBackgroundColor=default;verticalAlign=top;aspect=fixed;imageAspect=0;image=https://goharbor.io/img/logos/harbor-icon-color.png;\&quot; parent=\&quot;1\&quot; vertex=\&quot;1\&quot;&gt;\n          &lt;mxGeometry x=\&quot;619.46\&quot; y=\&quot;40\&quot; width=\&quot;90\&quot; height=\&quot;90\&quot; as=\&quot;geometry\&quot; /&gt;\n        &lt;/mxCell&gt;\n        &lt;mxCell id=\&quot;WVN11N4hpTEZWdmhbh4R-26\&quot; value=\&quot;in future\&quot; style=\&quot;rounded=1;whiteSpace=wrap;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;\&quot; parent=\&quot;1\&quot; vertex=\&quot;1\&quot;&gt;\n          &lt;mxGeometry x=\&quot;624.46\&quot; y=\&quot;140\&quot; width=\&quot;80\&quot; height=\&quot;16.43\&quot; as=\&quot;geometry\&quot; /&gt;\n        &lt;/mxCell&gt;\n        &lt;mxCell id=\&quot;WVN11N4hpTEZWdmhbh4R-27\&quot; value=\&quot;in future\&quot; style=\&quot;rounded=1;whiteSpace=wrap;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;\&quot; parent=\&quot;1\&quot; vertex=\&quot;1\&quot;&gt;\n          &lt;mxGeometry x=\&quot;238.48000000000008\&quot; y=\&quot;140\&quot; width=\&quot;80\&quot; height=\&quot;16.43\&quot; as=\&quot;geometry\&quot; /&gt;\n        &lt;/mxCell&gt;\n        &lt;mxCell id=\&quot;WVN11N4hpTEZWdmhbh4R-28\&quot; value=\&quot;\&quot; style=\&quot;shape=image;verticalLabelPosition=bottom;labelBackgroundColor=default;verticalAlign=top;aspect=fixed;imageAspect=0;image=https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Gitea_Logo.svg/2048px-Gitea_Logo.svg.png;\&quot; parent=\&quot;1\&quot; vertex=\&quot;1\&quot;&gt;\n          &lt;mxGeometry x=\&quot;223.26\&quot; y=\&quot;40\&quot; width=\&quot;100\&quot; height=\&quot;100\&quot; as=\&quot;geometry\&quot; /&gt;\n        &lt;/mxCell&gt;\n        &lt;mxCell id=\&quot;WVN11N4hpTEZWdmhbh4R-35\&quot; value=\&quot;\&quot; style=\&quot;shape=image;verticalLabelPosition=bottom;labelBackgroundColor=default;verticalAlign=top;aspect=fixed;imageAspect=0;image=https://cdn.icon-icons.com/icons2/2699/PNG/512/grafana_logo_icon_171048.png;\&quot; parent=\&quot;1\&quot; vertex=\&quot;1\&quot;&gt;\n          &lt;mxGeometry x=\&quot;490\&quot; y=\&quot;395.67\&quot; width=\&quot;80\&quot; height=\&quot;80\&quot; as=\&quot;geometry\&quot; /&gt;\n        &lt;/mxCell&gt;\n        &lt;mxCell id=\&quot;WVN11N4hpTEZWdmhbh4R-36\&quot; value=\&quot;monitoring / log aggregation / alerting&amp;amp;nbsp;\&quot; style=\&quot;rounded=1;whiteSpace=wrap;html=1;fillColor=#fff2cc;strokeColor=#d6b656;\&quot; parent=\&quot;1\&quot; vertex=\&quot;1\&quot;&gt;\n          &lt;mxGeometry x=\&quot;390\&quot; y=\&quot;484.04\&quot; width=\&quot;280\&quot; height=\&quot;40\&quot; as=\&quot;geometry\&quot; /&gt;\n        &lt;/mxCell&gt;\n        &lt;mxCell id=\&quot;WVN11N4hpTEZWdmhbh4R-38\&quot; value=\&quot;\&quot; style=\&quot;shape=image;verticalLabelPosition=bottom;labelBackgroundColor=default;verticalAlign=top;aspect=fixed;imageAspect=0;image=https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Prometheus_software_logo.svg/2066px-Prometheus_software_logo.svg.png;\&quot; parent=\&quot;1\&quot; vertex=\&quot;1\&quot;&gt;\n          &lt;mxGeometry x=\&quot;399\&quot; y=\&quot;395.67\&quot; width=\&quot;80\&quot; height=\&quot;79.33\&quot; as=\&quot;geometry\&quot; /&gt;\n        &lt;/mxCell&gt;\n        &lt;mxCell id=\&quot;WVN11N4hpTEZWdmhbh4R-39\&quot; value=\&quot;\&quot; style=\&quot;shape=image;verticalLabelPosition=bottom;labelBackgroundColor=default;verticalAlign=top;aspect=fixed;imageAspect=0;image=https://grafana.com/static/assets/img/blog/loki.png;\&quot; parent=\&quot;1\&quot; vertex=\&quot;1\&quot;&gt;\n          &lt;mxGeometry x=\&quot;580\&quot; y=\&quot;392.42\&quot; width=\&quot;86.5\&quot; height=\&quot;86.5\&quot; as=\&quot;geometry\&quot; /&gt;\n        &lt;/mxCell&gt;\n      &lt;/root&gt;\n    &lt;/mxGraphModel&gt;\n  &lt;/diagram&gt;\n&lt;/mxfile&gt;\n&quot;}"></div>
      <script type="text/javascript" src="https://viewer.diagrams.net/js/viewer-static.min.js"></script>



      </div>
    </Layout>
  );
}