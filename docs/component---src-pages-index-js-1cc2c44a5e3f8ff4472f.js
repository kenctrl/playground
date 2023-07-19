(self.webpackChunkv4 = self.webpackChunkv4 || []).push([
  [678],
  {
    5749: function (e, n, t) {
      'use strict';
      t.r(n),
        t.d(n, {
          default: function () {
            return h;
          },
        });
      var a = t(7294),
        i = t(9),
        r = t(7140),
        l = t(8589),
        m = t(6979),
        c = t(4165),
        o = t(3082),
        u = i.ZP.section.withConfig({
          displayName: 'courses__StyledHeroSection',
          componentId: 'sc-1t0sxbv-0',
        })(
          [
            '',
            ';flex-direction:column;align-items:flex-start;min-height:100vh;height:100vh;padding:0;@media (max-height:700px) and (min-width:700px),(max-width:360px){height:auto;padding-top:var(--nav-height);}h1{margin:0 0 30px 4px;color:var(--green);font-family:var(--font-mono);font-size:clamp(var(--fz-sm),5vw,var(--fz-md));font-weight:400;@media (max-width:480px){margin:0 0 20px 2px;}}h3{margin-top:5px;color:var(--slate);line-height:0.9;}p{margin:20px 0 0;max-width:540px;}.email-link{',
            ';margin-top:50px;}',
          ],
          function (e) {
            return e.theme.mixins.flexCenter;
          },
          function (e) {
            return e.theme.mixins.bigButton;
          },
        ),
        s = function () {
          var e = (0, a.useState)(!1),
            n = e[0],
            t = e[1],
            i = (0, o.Tb)();
          (0, a.useEffect)(function () {
            if (!i) {
              var e = setTimeout(function () {
                return t(!0);
              }, c.fb);
              return function () {
                return clearTimeout(e);
              };
            }
          }, []);
          var r = [
            a.createElement('h1', null, 'Hi, my name is'),
            a.createElement('h2', { className: 'big-heading' }, 'Kenneth Choi.'),
            a.createElement(
              a.Fragment,
              null,
              a.createElement(
                'p',
                null,
                "I'm a third-year student at MIT studying Computer Science and Engineering. I'm interested in full-stack web development, machine learning, and data privacy. In my free time, I enjoy cooking, vibing to music, and playing platformer games.",
              ),
            ),
          ];
          return a.createElement(
            u,
            null,
            i
              ? a.createElement(
                  a.Fragment,
                  null,
                  r.map(function (e, n) {
                    return a.createElement('div', { key: n }, e);
                  }),
                )
              : a.createElement(
                  l.Z,
                  { component: null },
                  n &&
                    r.map(function (e, n) {
                      return a.createElement(
                        m.Z,
                        { key: n, classNames: 'fadeup', timeout: c.Cs },
                        a.createElement('div', { style: { transitionDelay: n + 1 + '00ms' } }, e),
                      );
                    }),
                ),
          );
        },
        p = i.ZP.main.withConfig({
          displayName: 'pages__StyledMainContainer',
          componentId: 'sc-1tzx2o8-0',
        })(['counter-reset:section;']),
        h = function (e) {
          var n = e.location;
          return a.createElement(
            r.Ar,
            { location: n },
            a.createElement(
              p,
              { className: 'fillHeight' },
              a.createElement(r.VM, null),
              a.createElement(r.CL, null),
              a.createElement(r.pe, null),
              a.createElement(r.g4, null),
              a.createElement(s, null),
              a.createElement(r.r8, null),
            ),
          );
        };
    },
  },
]);
//# sourceMappingURL=component---src-pages-index-js-1cc2c44a5e3f8ff4472f.js.map
